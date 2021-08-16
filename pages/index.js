import Layout from '../components/Layout';
export default function Home() {
  return (
    <div>
      <Layout isAuth={true}>
        <img src="/backgroundHome.svg" alt="bg" />
      </Layout>
    </div>
  );
}
