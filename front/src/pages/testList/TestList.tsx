import { List } from "antd";

export const TestList = () => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={[
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
      ]}
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
