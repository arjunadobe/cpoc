import React, { useState } from "react";
import { Tabs } from "antd";
import CameraHandler from "../cameraHandler/CameraHandler";

import { AppCodeContext } from "../../app-code-context";
import { BarcodeOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const ScannerPrototype = () => {
  const [activeTabKey, setActiveTabKey] = useState(1);
  const [code, setCodeData] = useState("");
  const [type, setTypeData] = useState("");
  const setCode = (value) => {
    setCodeData(value);
  };
  const setType = (value) => {
    setTypeData(value);
  };

  const onTabChange = (activeKey) => {
    console.log(activeKey);
    setActiveTabKey(+activeKey);
  };
  return (
    <AppCodeContext.Provider value={{ code, setCode, type, setType }}>
      <div className="card-container">
        <Tabs type="card" defaultActiveKey="1" onChange={onTabChange}>
          <TabPane
            tab={
              <span>
                <BarcodeOutlined />
                Barcode/Qrcode Scanner
              </span>
            }
            key="1"
          >
            {activeTabKey === 1 ? <CameraHandler /> : null}
          </TabPane>

        </Tabs>
      </div>
    </AppCodeContext.Provider>
  );
};
export default ScannerPrototype;
