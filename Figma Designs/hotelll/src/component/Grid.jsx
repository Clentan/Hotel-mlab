import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Gridpics from '../component/Gridpics';
import Spa from '../component/Spa';
import Parking from '../component/parking';
import Resort from '../component/Resort';
import Casino from '../component/Casino';
import Bedroom from "./Bedroom";

const Grid = () => {
  return (
    <div className="flex flex-col items-center -ml-10 w-full py-28 text-center ]">

      <Tabs aria-label="Options" className="">
        <Tab key="dining" title="Dining & Restaurant">
          <Card>
            <CardBody className=" bg-[rgb(101,99,99)]">
              <Gridpics />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="parking space" title="Parking Space" >
          <Card className=" bg-[rgb(101,99,99)]">
            <CardBody>
              <Parking />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="spa" title="Spa">
          <Card className=" bg-[rgb(101,99,99)]">
            <CardBody>
              <Spa />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="resort & pool" title="Resort & Pool">
          <Card className=" bg-[rgb(101,99,99)]">
            <CardBody>
              <Resort />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="casino" title="Casino">
          <Card  className=" bg-[rgb(101,99,99)]">
            <CardBody>
              <Casino />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="bedrooms" title="Bedrooms">
          <Card className=" bg-[rgb(101,99,99)]">
            <CardBody>
              <Bedroom/>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Grid;
