import { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";

import { useStore } from "@/store";

import currentTemplate from "../../../../app/api/layout/layout.json" assert { type: "json" };
import perfumeTemplate from "../../../../app/api/layout/layout1.json" assert { type: "json" };
import carTemplate from "../../../../app/api/layout/layout2.json" assert { type: "json" };
import pizzaTemplate from "../../../../app/api/layout/layout3.json" assert { type: "json" };
import opticTemplate from "../../../../app/api/layout/layout4.json" assert { type: "json" };

export default function TemplateTabs() {
    const [activeLayout, setActiveLayout] = useState<string | null>('current');
    const setLayout = useStore((state) => state.AppLayout.setLayout);
    const close = useStore((state) => state.EditSectionMenu.close);

    useEffect(() => {
        close();
        switch (activeLayout) {
            case "current":
                setLayout(currentTemplate as IPage[]);
                break;
            case "perfume":
                setLayout(perfumeTemplate as IPage[]);
                break;
            case "car":
                setLayout(carTemplate as IPage[]);
                break;
            case "pizza":
                setLayout(pizzaTemplate as IPage[]);
                break;
            case "optic":
                setLayout(opticTemplate as IPage[]);
                break;
        }
    }, [activeLayout]);

    return (
        <Tabs
            variant={'pills'}
            color={'violet'}
            defaultValue={'current'}
            value={activeLayout}
            onChange={setActiveLayout}
        >
            <Tabs.List>
                <Tabs.Tab value="current">Current Template</Tabs.Tab>
                <Tabs.Tab value="perfume">Perfume Template</Tabs.Tab>
                <Tabs.Tab value="car">Car Template</Tabs.Tab>
                <Tabs.Tab value="pizza">Pizza Template</Tabs.Tab>
                <Tabs.Tab value="optic">Optic Template</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}