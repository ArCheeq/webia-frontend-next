import React, { useState, useEffect, PropsWithChildren, WheelEvent, TouchEvent, PointerEvent } from "react";
import { useStore } from "@/store";

// Determines how quickly the scale will change in reaction to the scroll wheel.
const SCROLL_WHEEL_FACTOR = 0.2;

export default function InteractionPane({ children }: PropsWithChildren) {
    // Scale determines the size of the displayed children (this react to pinch/zoom movements).
    // Offset determines the position of the displayed children (this respond to dragging movement).
    const offset = useStore((state) => state.InteractionPane.offset);
    const setOffset = useStore((state) => state.InteractionPane.setOffset);
    const scale = useStore((state) => state.InteractionPane.scale);
    const setScale = useStore((state) => state.InteractionPane.setScale);

    const [initialDistanceBetweenFingers, setInitialDistanceBetweenFingers] = useState(0);
    const [initialScale, setInitialScale] = useState(1);
    const [initialTouchCenter, setInitialTouchCenter] = useState({ x: 0, y: 0 });
    const [initialOffset, setInitialOffset] = useState({ x: 0, y: 0 });
    const [dragPositionStart, setDragPositionStart] = useState({ x: 0, y: 0 });
    const [dragPositionOffsetStart, setDragPositionOffsetStart] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
        if (event.button === 1) {
            const newDragPositionStart = { x: event.clientX, y: event.clientY };
            setDragPositionStart(newDragPositionStart); // Position start on the interaction pane
            setDragPositionOffsetStart({ ...offset }); // Position offset start original, before the drag action
            setIsDragging(true);
        }
    }

    function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
        setIsDragging(false);
    }

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (isDragging && event.buttons === 4) {
            const dragPositionEnd = { x: event.clientX, y: event.clientY };
            const deltaX = dragPositionEnd.x - dragPositionStart.x;
            const deltaY = dragPositionEnd.y - dragPositionStart.y;
            setOffset({
                x: Math.round(dragPositionOffsetStart.x + deltaX),
                y: Math.round(dragPositionOffsetStart.y + deltaY),
            });
        }
    }

    function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
        if (event.touches.length >= 2) {
            const distanceX = event.touches[1].clientX - event.touches[0].clientX;
            const distanceY = event.touches[1].clientY - event.touches[0].clientY;
            const initialDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            setInitialDistanceBetweenFingers(initialDistance);
            const centerX = event.touches[0].clientX + (event.touches[1].clientX - event.touches[0].clientX) / 2;
            const centerY = event.touches[0].clientY + (event.touches[1].clientY - event.touches[0].clientY) / 2;
            setInitialTouchCenter({
                x: centerX,
                y: centerY,
            });
            setInitialScale(scale);
            setInitialOffset({ ...offset });
        }
    }

    /*
     * Handles two finger actions: Pinch/zoom + two finger move
     * The action is initiated by handleTouchStart, and subsequently the following code is called
     * while the fingers are on the screen.
     */
    function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
        if (event.touches.length >= 2) {
            //The following calculates how much the scale must changes (given the change in distance between the fingers)
            const distanceX = event.touches[1].clientX - event.touches[0].clientX;
            const distanceY = event.touches[1].clientY - event.touches[0].clientY;
            const currentDistanceBetweenFingers = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const scaleChange = currentDistanceBetweenFingers / initialDistanceBetweenFingers;
            const newScale = initialScale * scaleChange;
            setScale(newScale);

            //The following adapts the offset in such a way that we zoom in on the center point between the fingers
            //1. Take the original center, and convert it from screen coordinate space to image coordinate space
            const paneCoordinateX = (initialTouchCenter.x - initialOffset.x) / initialScale;
            const paneCoordinateY = (initialTouchCenter.y - initialOffset.y) / initialScale;
            //2. Calculate where this center would end up, given the new scale
            const wouldBeNewScreenPositionX = paneCoordinateX * newScale + initialOffset.x;
            const wouldBeNewScreenPositionY = paneCoordinateY * newScale + initialOffset.y;
            //3. Calculate the different between the two (we want it to be zero)
            const offsetAdjustmentX1 = initialTouchCenter.x - wouldBeNewScreenPositionX;
            const offsetAdjustmentY1 = initialTouchCenter.y - wouldBeNewScreenPositionY;

            //In addition, the following adapts the offset when both fingers move in a particular direction
            //This way you can pinch/zoom and move the canvas at the same time
            const currentCenterX = event.touches[0].clientX + (event.touches[1].clientX - event.touches[0].clientX) / 2;
            const currentCenterY = event.touches[0].clientY + (event.touches[1].clientY - event.touches[0].clientY) / 2;
            const offsetAdjustmentX2 = currentCenterX - initialTouchCenter.x;
            const offsetAdjustmentY2 = currentCenterY - initialTouchCenter.y;

            //Finally, apply both offset adjustments
            setOffset({
                x: initialOffset.x + offsetAdjustmentX1 + offsetAdjustmentX2,
                y: initialOffset.y + offsetAdjustmentY1 + offsetAdjustmentY2,
            });
        }
    }

    // function handleWheel(event: WheelEvent<HTMLDivElement>) {
    //     const initialScale = scale;
    //     const initialOffset = { ...offset };
    //
    //     if (event.ctrlKey) {
    //         event.preventDefault();
    //
    //         let newScale;
    //         if (event.deltaY > 0) newScale = initialScale * (1 - SCROLL_WHEEL_FACTOR);
    //         else newScale = initialScale * (1 + SCROLL_WHEEL_FACTOR);
    //         setScale(newScale);
    //         //1. Take the center, and convert it from screen coordinate space to image coordinate space.
    //         const imageCoordinateX = (event.clientX - initialOffset.x) / initialScale;
    //         const imageCoordinateY = (event.clientY - initialOffset.y) / initialScale;
    //         //2. The following adapts the offset in such a way that we zoom in on point where the scroll wheel is used.
    //         const newOffsetX = initialOffset.x + initialScale * imageCoordinateX - newScale * imageCoordinateX;
    //         const newOffsetY = initialOffset.y + initialScale * imageCoordinateY - newScale * imageCoordinateY;
    //         //Finally, apply the adjustment
    //         setOffset({
    //             x: newOffsetX,
    //             y: newOffsetY,
    //         });
    //     } else {
    //         setOffset({
    //             x: initialOffset.x,
    //             y: initialOffset.y - event.deltaY,
    //         });
    //     }
    // }

    function handleWheel(event: WheelEvent<HTMLDivElement>) {
        const initialScale = scale;
        const initialOffset = { ...offset };

        if (event.ctrlKey) {
            let newScale;
            if (event.deltaY > 0) newScale = initialScale * (1 - SCROLL_WHEEL_FACTOR);
            else newScale = initialScale * (1 + SCROLL_WHEEL_FACTOR);
            setScale(newScale);
            const imageCoordinateX = (event.clientX - initialOffset.x) / initialScale;
            const imageCoordinateY = (event.clientY - initialOffset.y) / initialScale;
            const newOffsetX = initialOffset.x + initialScale * imageCoordinateX - newScale * imageCoordinateX;
            const newOffsetY = initialOffset.y + initialScale * imageCoordinateY - newScale * imageCoordinateY;
            setOffset({
                x: newOffsetX,
                y: newOffsetY,
            });
        } else {
            setOffset({
                x: initialOffset.x - event.deltaX,
                y: initialOffset.y - event.deltaY,
            });
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        if (window) {
            window.addEventListener(
                "wheel",
                (event) => {
                    event.preventDefault();
                },
                {
                    capture: true,
                    passive: false,
                    signal: controller.signal,
                },
            );
        }

        return () => {
            if (window) {
                controller.abort();
            }
        };
    }, []);

    // Return the rendered component
    // The user input pane div takes the full screen (see inset attribute), this is there to capture the user's mouse / finger gestures' input.
    // The child div of the interaction pane is the thing we move around and scale as a result of the actions.
    return (
        <div
            id="userinputpane"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
            style={{
                touchAction: "none",
                position: "absolute",
                inset: 0,
                cursor: isDragging ? "grabbing" : "default",
            }}
        >
            {/* This is the div that is "moved around" using the offset and scaled automatically, in response to the user's mouse/finger gestures.
          Note how you can pass in any children that will automatically adapt to the required scale + offset. */}
            <div
                style={{
                    position: "absolute",
                    left: `${offset.x}px`,
                    top: `${offset.y}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                }}
            >
                {children}
            </div>
        </div>
    );
}
