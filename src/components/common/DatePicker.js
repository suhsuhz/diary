import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import '../../styles/common/DatePicker.scss';
import { selectedDate } from "../../redux/slices/diarySlice";
import { useDispatch, useSelector } from 'react-redux';
import { formatISO } from "date-fns";

function DatePicker() {
    const dispatch = useDispatch();
    const writingDiary = useSelector((state) => state.diary.writingDiary);
    const handleClickDate = (date) => {
        const isoDateString = formatISO(date);
        dispatch(selectedDate(isoDateString));
    }

    return (
        <ReactDatePicker
            className="DatePicker"
            dateFormat='yyyy-MM-dd'
            shouldCloseOnSelect
            minDate={new Date('2000-01-01')}
            maxDate={new Date()}
            selected={(writingDiary.date === '') ? new Date() : writingDiary.date}
            onChange={(date) => handleClickDate(date)}
        />
    );
}

export default DatePicker;