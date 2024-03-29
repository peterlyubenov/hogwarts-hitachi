import { Layout } from "../components/Layout";
import corneliusImage from "../assets/Corneliushogwarts.jpg";
import { Card } from "antd";
import { useTitle } from "../hooks/useTitle";

const { Meta } = Card;

export const Contact = () => {
  useTitle("Contact - Hogwarts Houses");
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <Card
          cover={<img alt="Cornelius" src={corneliusImage} />}
          style={{ width: 500 }}
        >
          <Meta
            title="Cornelius Oswald Fudge,"
            description={
              <>
                Ministry of Magic Headquarters,
                <br />
                Underground of Whitehall and the HM Treasury building,
                <br />
                London,
                <br />
                Great Britain
              </>
            }
          />
        </Card>
      </div>
    </Layout>
  );
};
