import '../../styles/diary/Content.scss';
import Background from "../Background";
import { useEffect, useState } from "react";
import { setHeader } from "../../redux/slices/headerSlice";
import { setDateData } from "../../common/util/date";
import { useDispatch, useSelector } from 'react-redux';
import { emotionFileNameById } from "../../common/util/emotion";
import { deleteDiary, updateWritingDiary, resetSelectedDiary, updateSelectedDiary } from '../../redux/slices/diarySlice';
import Button from '../common/Button';
import { useNavigate, useParams } from 'react-router-dom';

function Content() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const diaryData = useSelector((state) => state.diary.selectedDiary);

    const handleClickEditButton = () => {
        if (!window.confirm("수정하시겠습니까?")) return;

        dispatch(updateWritingDiary());
        navigate('/write');
    }

    const handleClickDeleteButton = () => {
        if (!window.confirm("삭제하시겠습니까?")) return;
        dispatch(deleteDiary(diaryData.id));
        navigate('/');
    }

    useEffect(() => {
        dispatch(setHeader({ text: '목록', url: '/' }));

        if (!diaryData) {
            alert("잘못된 접근입니다.");
            navigate('/');
            return;
        }
        if (id != diaryData.id) {
            dispatch(updateSelectedDiary(id));
        }

        return () => {
            dispatch(resetSelectedDiary());
        }
    }, []);

    useEffect(() => {
        if (!diaryData || !diaryData.id) {
            alert("잘못된 접근입니다.");
            navigate('/');
            return;
        }
    }, [diaryData]);

    return (
        <Background>
            {diaryData && diaryData.id && (
                <div className="Content">
                    <div className='contentButton'>
                        <Button
                            type={'positive'}
                            text={'수정'}
                            onClick={handleClickEditButton}
                        />
                        <Button
                            type={'negative'}
                            text={'삭제'}
                            onClick={handleClickDeleteButton}
                        />
                    </div>
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
                </div>)}
        </Background>
    );
}

export default Content;