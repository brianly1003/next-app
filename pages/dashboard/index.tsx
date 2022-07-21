import { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import DashboardLayout from "../../containers/DashboardLayout/DashboardLayout";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home page</title>
      </Head>
      <DashboardLayout />
    </Layout>
  );
};

export default Dashboard;
