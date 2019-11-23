import React, {Component} from "react";
import moment from 'moment';
import {
  Layout,
  Menu,
  Breadcrumb,
  Comment,
  Avatar,
  Tooltip,
  Icon,
  PageHeader,
  Button,
  Descriptions,
  Popconfirm, message, Card, Col, Row, Affix, Steps, Collapse
} from 'antd';

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

const MyComment = (props) => (
  <Comment
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully
        and efficiently.
      </p>
    }
    datetime={
      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().fromNow()}</span>
      </Tooltip>
    }
  />
);

const MyCard = (props) => {
  const Extras = (props) => (
    <Button.Group size={'small'}>
      <Button>
        <Icon type="check" />
        Approve
      </Button>
      <Button>
        <Icon type="close" />
        Reject
      </Button>
    </Button.Group>
  );

  return (
    <Card title="Breno Roofing" extra={<Extras />}>
      <p>$2600</p>
      <p>View Document</p>
    </Card>
  );
}

const Confirm = (props) => {
  const confirm = () => message.success('Click on Yes');
  const cancel = () => message.success('Click on No');

  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button style={{marginLeft: 8}}>{props.text || 'Delete'}</Button>
    </Popconfirm>
  )
};

const App = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                              <Icon type="setting"/>
                              Submenu
                              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="3">News</Menu.Item>
        </Menu>
      </Header>
      <Affix>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="3911 Carolynn Crt, Vineland On"
          subTitle="Kevin Redman"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">(905) 562-3027</Descriptions.Item>
            <Descriptions.Item label="Material">
              <a>Asphalt</a>
            </Descriptions.Item>
            <Descriptions.Item label="Estimate">$19,000</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Affix>
      <Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
          <Steps style={{marginBottom: 20}}>
            <Steps.Step status="finish" title="Login" icon={<Icon type="user"/>}/>
            <Steps.Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
            <Steps.Step status="process" title="Pay" icon={<Icon type="loading"/>}/>
            <Steps.Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
          </Steps>
          <h1>Quotes</h1>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <MyCard/>
            </Col>
            <Col span={8}>
              <MyCard/>
            </Col>
            <Col span={8}>
              <MyCard/>
            </Col>
          </Row>

          <Row gutter={[40, 40]}>
            <Col span={12}>
              <h2>Comments</h2>
              <MyComment/>
              <MyComment/>
              <MyComment/>
              <MyComment/>
            </Col>
            <Col span={12}>
              <h2>Quotes</h2>
              <Row gutter={[40, 40]}>
                <Col span={24}>
                  <MyCard/>
                </Col>
                <Col span={24}>
                  <MyCard/>
                </Col>
                <Col span={24}>
                  <MyCard/>
                </Col>
              </Row>
            </Col>
          </Row><Row gutter={[40, 40]}>
            <Col span={12}>
              <h2>Settings</h2>
              <Collapse
                defaultActiveKey={['1']}
                onChange={(e) => console.log(e)}
                expandIconPosition={'right'}
              >
                <Collapse.Panel header="This is panel header 1" key="1" extra={<Icon type="setting" />}>
                  <div>Some Text</div>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2" extra={<Icon type="setting" />}>
                  <div>Some Text</div>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3" extra={<Icon type="setting" />}>
                  <div>Some Text</div>
                </Collapse.Panel>
              </Collapse>
            </Col>
            <Col span={12}>
              <h2>Comments</h2>
              <MyComment/>
              <MyComment/>
              <MyComment/>
              <MyComment/>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
