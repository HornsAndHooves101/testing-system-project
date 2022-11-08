import { List } from "antd";
import { useEffect, useState } from "react";

type Test = {
  id: number;
  name: string;
};

export const TestList = () => {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    fetch("/api/tests/").then(async (resp: Response) => {
      const t = await resp.json();
      setTests(t);
    });
  }, []);

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={tests}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">start</a>]}>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
};
