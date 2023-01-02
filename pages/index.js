import React from "react"
import RssTable from "../components/tables/rssTable.js"
import Image from '../components/interface/image.js'
import Side from '../components/interface/side.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DarkModeToggle from "../components/darkMode/darkMode.js";
import SitesTable from "../components/tables/sitesTable.js";
import TextsTable from "../components/tables/textsTable.js";
import FilesTable from "../components/tables/filesTable.js";

export default class Index extends React.Component {
    render() {

        return (
            <>
                <div id="interface">
                    <Image />
                    {/* <Side /> */}
                </div>
                <Tabs>
                    <TabList>
                        <Tab>rss</Tab>
                        <Tab>sites</Tab>
                        {/* <Tab>texts</Tab> */}
                        <Tab>files</Tab>
                        <DarkModeToggle />
                    </TabList>

                    <TabPanel>
                        <RssTable />
                    </TabPanel>

                    <TabPanel>
                        <SitesTable />
                    </TabPanel>
{/* 
                    <TabPanel>
                        <TextsTable />
                    </TabPanel> */}

                    <TabPanel>
                        <FilesTable />
                    </TabPanel>
                </Tabs>
            </>
        )
    }
}