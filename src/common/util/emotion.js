import { IMAGE_URL } from "../constant"
export const emotionList = [
    {
        emotion_id: 1,
        emotion_img: IMAGE_URL + `/emotion/icon_happy.png`,
        emotion_descript: "좋음"
    },
    {
        emotion_id: 2,
        emotion_img: IMAGE_URL + `/emotion/icon_normal.png`,
        emotion_descript: "보통"
    },
    {
        emotion_id: 3,
        emotion_img: IMAGE_URL + `/emotion/icon_tired.png`,
        emotion_descript: "피곤"
    },
    {
        emotion_id: 4,
        emotion_img: IMAGE_URL + `/emotion/icon_bad.png`,
        emotion_descript: "나쁨"
    },
    {
        emotion_id: 5,
        emotion_img: IMAGE_URL + `/emotion/icon_angry.png`,
        emotion_descript: "화남"
    },
    {
        emotion_id: 6,
        emotion_img: IMAGE_URL + `/emotion/icon_sad.png`,
        emotion_descript: "슬픔"
    },
];

export const emotionFileNameById = {
    1: 'icon_happy.png',
    2: 'icon_normal.png',
    3: 'icon_tired.png',
    4: 'icon_bad.png',
    5: 'icon_angry.png',
    6: 'icon_sad.png',
};