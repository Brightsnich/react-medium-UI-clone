import MainLayout from '../components/layout/MainLayout';
import ArticleList from '../components/article/ArticleList';
import Sidebar from '../components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <MainLayout
      mainContent={<ArticleList />}
      sidebarContent={<Sidebar />}
    />
  );
};

export default HomePage;
