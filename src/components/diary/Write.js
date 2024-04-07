import '../../styles/diary/Write.scss';
import Background from "../Background";
import DatePicker from "../common/DatePicker";
import Emotion from "../common/Emotion";
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDiary, resetWritingSagaRequested, updateDiary } from '../../redux/slices/diarySlice';
import { setHeader } from '../../redux/slices/headerSlice';
import { formatISO } from "date-fns";
import { useNavigate } from 'react-router-dom';

function Write() {
    const navigate = useNavigate();
    const writingDiary = useSelector((state) => state.diary.writingDiary);
    const [substance, setSubstance] = useState(writingDiary.substance);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader({ text: '목록', url: '/' }));

        return () => {
            clearData();
        };
    }, []);

    const saveDiary = (type) => {
        if (!window.confirm("일기를 저장하시겠습니까?")) return;

        if (writingDiary.emotion === '') {
            alert("감정을 선택해주세요");
            return;
        }
        if (!substance) {
            alert("일기를 입력해주세요");
            return;
        }

        const data = {
            id: writingDiary.id,
            date: (writingDiary.date) ? writingDiary.date : formatISO(new Date()),
            emotion: writingDiary.emotion,
            substance: substance
        };

        if (type === 'new') {
            dispatch(createDiary(data));
        } else {
            dispatch(updateDiary(data));
        }
        clearData();

        navigate('/');
    }

    const clearData = () => {
        dispatch(resetWritingSagaRequested());
        setSubstance('');
    }

    return (
        <Background>
            <article className="Write">
                <section className="date">
                    <DatePicker />
                </section>
                {<section className="emotion">
                    <h2>오늘의 기분</h2>
                    <Emotion />
                </section>}
                <section className="substance">
                    <h2>오늘의 일기</h2>
                    <textarea
                        onChange={(event) => {
                            setSubstance(event.target.value);
                        }}
                        value={substance}
                    ></textarea>
                </section>
                <section className='button'>
                    {writingDiary.id === '' ? (
                        <Button
                            type={'positive'}
                            text={'저장'}
                            onClick={() => saveDiary('new')}
                        />
                    ) : (
                        <Button
                            type={'positive'}
                            text={'수정'}
                            onClick={() => saveDiary('update')}
                        />
                    )}

                </section>
            </article>
        </Background>
    );
}

export default Write;