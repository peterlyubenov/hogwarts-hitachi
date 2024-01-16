import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Layout } from "../components/Layout";
import { useHogwartsHousesQuery } from "../queries/hogwarts";
import { Skeleton, Table, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddHouseModal } from "../components/AddHouseModal";
import { HogwartsHouseTableRow } from "../queries/hogwarts.types";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Animal",
    dataIndex: "animal",
    key: "animal",
  },
  {
    title: "Ghost",
    dataIndex: "ghost",
    key: "ghost",
  },
  {
    title: "Common Room",
    dataIndex: "commonRoom",
    key: "commonRoom",
  },
];

export const Home = () => {
  const [isAddHouseModalOpen, setIsAddHouseModalOpen] = useState(false);
  const [localHouses, setLocalHouses] = useState(() =>
    JSON.parse(localStorage.getItem("houses") || "[]")
  );
  const { data: houses, isLoading, isError, error } = useHogwartsHousesQuery();
  const [messageApi] = message.useMessage();

  const tableData = useMemo(() => {
    const allHouses = [...(houses || []), ...localHouses];
    return allHouses.map((house) => ({
      key: house.id || house.key,
      name: house.name,
      animal: house.animal,
      ghost: house.ghost,
      commonRoom: house.commonRoom,
    }));
  }, [houses, localHouses]);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    messageApi.error((error as Error).message);
  }

  const addHogwartsHouse = ({
    animal,
    commonRoom,
    ghost,
    name,
  }: HogwartsHouseTableRow) => {
    const newHouse = { key: uuid(), animal, commonRoom, ghost, name };
    const updatedHouses = [...localHouses, newHouse];
    setLocalHouses(updatedHouses);
    localStorage.setItem("houses", JSON.stringify(updatedHouses));
    setIsAddHouseModalOpen(false);
  };

  return (
    <Layout>
      <div>
        <div className="flex justify-end">
          <button
            onClick={() => setIsAddHouseModalOpen(true)}
            className="bg-primary hover:bg-primaryHover transition-all text-white px-4 py-2 rounded"
          >
            <PlusOutlined className="mr-2" />
            Add house
          </button>
        </div>
        <Table dataSource={tableData} columns={columns} />
      </div>
      <AddHouseModal
        isOpen={isAddHouseModalOpen}
        onCancel={() => setIsAddHouseModalOpen(false)}
        onSubmit={addHogwartsHouse}
      />
    </Layout>
  );
};
