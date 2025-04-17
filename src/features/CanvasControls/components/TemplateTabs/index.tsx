import { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";

import { useStore } from "@/store";

import currentTemplate from "../../../../app/api/layout/layout.json" assert { type: "json" };
import perfumeTemplate from "../../../../app/api/layout/layout1.json" assert { type: "json" };
import digitalTemplate from "../../../../app/api/layout/layout2.json" assert { type: "json" };
import pizzaTemplate from "../../../../app/api/layout/layout3.json" assert { type: "json" };


export default function TemplateTabs() {
    const [activeTab, setActiveTab] = useState<string | null>('current');
    const setLayout = useStore((state) => state.AppLayout.setLayout);

    useEffect(() => {
        console.log(activeTab);
        switch (activeTab) {
            case "current":
                setLayout(currentTemplate as IPage[]);
                break;
            case "perfume":
                setLayout(perfumeTemplate as IPage[]);
                break;
            case "digital":
                setLayout(digitalTemplate as IPage[]);
                break;
            case "pizza":
                setLayout(pizzaTemplate as IPage[]);
        }
    }, [activeTab]);

    return (
        <Tabs
            variant={'pills'}
            color={'violet'}
            defaultValue={'current'}
            value={activeTab}
            onChange={setActiveTab}
        >
            <Tabs.List>
                <Tabs.Tab value="current">Current Template</Tabs.Tab>
                <Tabs.Tab value="perfume">Perfume Template</Tabs.Tab>
                <Tabs.Tab value="digital">Digital Template</Tabs.Tab>
                <Tabs.Tab value="pizza">Pizza Template</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}