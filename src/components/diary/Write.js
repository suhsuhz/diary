import '../../styles/diary/Write.scss';
import Background from "../Background";
import DatePicker from "../common/DatePicker";
import Emotion from "../common/Emotion";
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDiary, resetWritingSagaRequested } from '../../redux/slices/diarySlice';
import { setHeader } from '../../redux/slices/headerSlice';
import { formatISO } from "date-fns";

function Write() {
    const [substance, setSubstance] = useState('');
    const writingDiary = useSelector((state) => state.diary.writingDiary);

    const selectedDiaryId = useSelector((state) => state.diary.selectedDiaryId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader({ text: '목록', url: '/' }));
    }, []);

    const saveDiary = () => {
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
        dispatch(createDiary(data));
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
                            text={'저장'}
                            onClick={saveDiary}
                        />
                    ) : (
                        <Button
                            text={'수정'}
                        />
                    )}

                </section>
            </article>
        </Background>
    );
}

export default Write;