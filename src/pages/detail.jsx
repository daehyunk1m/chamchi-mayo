// 상세
import { useParams } from "react-router-dom";

import useFetchPosts from "../hooks/useFetchPosts";
import DetailContainer from "../components/detail/DetailContainer";
import Header from "../components/common/header/Header";
import Spinner from "../components/common/spinner/Spinner";
import Toolbar from "../components/detail/Toolbar";
import Reply from "../components/reply/Reply";

const Detail = () => {
  const params = useParams();
  const postId = parseInt(params.id);
  const post = useFetchPosts(postId);

  return (
    <main>
      { !post && <Spinner /> }
      <Header />
      <Toolbar post={post} />
      <DetailContainer post={ post } postId={ postId }/>
      <Reply postId={ postId } />
    </main>
  );
};

export default Detail;