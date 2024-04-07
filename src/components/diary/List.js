import '../../styles/diary/List.scss';
import Background from "../Background";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setHeader } from "../../redux/slices/headerSlice";
import { updateSelectedDiary } from '../../redux/slices/diarySlice';
import { IMAGE_URL } from "../../common/constant";
import { emotionFileNameById } from "../../common/util/emotion";
import { useNavigate } from 'react-router-dom';
import { setDateData } from '../../common/util/date';

function List() {
    const dispatch = useDispatch();
    const diaryList = useSelector((state) => state.diary.diaryList);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setHeader({ text: '글쓰기', url: '/write' }));
    }, []);

    const handleItemClick = (diaryId) => {
        dispatch(updateSelectedDiary(diaryId));
        navigate(`/content/${diaryId}`);
    }

    return (
        <Background>
            <article className="List">
                {diaryList.length < 1 ? (
                    <div className="noDiaryMessage">
                        일기를 작성해보세요 :)<br />
                        해당 일기는 local storage에만 저장됩니다.
                    </div>
                ) : (
                    diaryList.map((diary, index) => (
                        <div className="item"
                            key={index}
                            onClick={() => handleItemClick(diary.id)}>
                            <div className="itemHead">
                                <div className="emotion">
                                    <img src={`${IMAGE_URL}/emotion/${emotionFileNameById[diary.emotion]}`} />
                                </div>
                                <div className="date">
                                    <span className='ymd'>{setDateData(diary.date).ymd}</span>
                                    <span className='time'>{setDateData(diary.date).time}</span>
                                </div>
                            </div>
                            <div className="itemContent">
                                {diary.substance}
                            </div>
                        </div>
                    ))
                )}
            </article>
        </Background >
    );
}

export default List;