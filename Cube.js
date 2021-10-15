import { Form, Input, Button, Checkbox } from "antd";

function Dialog() {
  return (
    <Form name="basic">
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function Box() {
  return (
    <mesh scale={[2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
      <Html distanceFactor={1.2} position={[0, 0, 0.5]} transform>
        <Dialog />
      </Html>
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} color="red" />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}
