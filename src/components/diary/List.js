import { useNavigate } from "react-router-dom";
import Background from "../Background";
import Header from "../Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeader } from "../../redux/slices/headerSlice";

function List() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader({ text: '글쓰기', url: '/write' }));
    }, []);

    return (
        <Background>
            <article className="List">
                안녕하세요 명조체입니다
            </article>
        </Background>
    );
}

export default List;