import '../../styles/diary/Content.scss';
import Background from "../Background";
import { useEffect } from "react";
import { setHeader } from "../../redux/slices/headerSlice";
import { resetSelectedDiary } from '../../redux/slices/diarySlice';
import { setDateData } from "../../common/util/date";
import { useDispatch, useSelector } from 'react-redux';
import { emotionFileNameById } from "../../common/util/emotion";

function Content() {
    const dispatch = useDispatch();
    const diaryData = useSelector((state) => state.diary.selectedDiary);

    useEffect(() => {
        dispatch(setHeader({ text: '목록', url: '/' }));
    }, []);


    return (
        <Background>
            <div className="Content">
                <div className='contentTop'>
                    <div className="emotion">
                        <img src={`${window.location.origin}/assets/images/emotion/${emotionFileNameById[diaryData.emotion]}`} />
                    </div>
                    <div className="date">
                        <span className="ymd">{setDateData(diaryData.date).ymd}</span>
                        <span className="time">{setDateData(diaryData.date).time}</span>
                    </div>
                </div>
                <div className="contentBottom">
                    {diaryData.substance}
                </div>
            </div>
        </Background>
    );
}

export default Content;