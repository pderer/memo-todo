import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCallback, useState } from "react";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

export default function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState<string>("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <div style={{ display: "flex", marginBottom: 10 }}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Write your to do..."
          style={{ fontSize: 20 }}
        />
        <Button style={{ height: "100%" }}>
          <PlusOutlined />
        </Button>
      </form>
    </div>
  );
}
