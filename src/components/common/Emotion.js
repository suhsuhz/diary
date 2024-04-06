import '../../styles/common/Emotion.scss';
import { emotionList } from "../../common/util/emotion";
import { selectedEmotion } from '../../redux/slices/diarySlice';
import { useDispatch, useSelector } from 'react-redux';

function Emotion() {
    const dispatch = useDispatch();
    const writingDiary = useSelector((state) => state.diary.writingDiary);
    const handleClickEmotion = (id) => {
        dispatch(selectedEmotion(id));
    }
    return (
        <div className="Emotion">
            {emotionList.map((emotion) => (
                <span
                    className={['emotionItem', writingDiary.emotion === emotion.emotion_id ?
                        'active' : ''].join(' ')}
                    key={emotion.emotion_id}
                    onClick={() => handleClickEmotion(emotion.emotion_id)}
                >
                    <img src={emotion.emotion_img} alt={emotion.emotion_descript} />
                    <span>{emotion.emotion_descript}</span>
                </span>
            )
            )
            }
        </div>
    );
}

export default Emotion;