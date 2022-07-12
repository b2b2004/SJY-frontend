import "./Chatbot.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import botImage from '../image/botavatar.png';
import botAvatar from "../image/botavatar.png";
import userAvatar from "../image/useravatar.png";

export default function App() {
    const config = {
        floating: true,
        width: "300px",
        height: "400px",
    };
    const steps = [
        {
            id: '0',
            message: '안녕하세요 Cod_meter 입니다. 저희 소개를 시작해 볼까요?',
            trigger: '1',
        },
        {
            id: '1',
            options: [
                { label: '시작하기', trigger: '2' },
            ],
        },
        {
            id: '2',
            message: 'Cod_meter는 개발자들의 공간입니다.',
            trigger : '3',
        },
        {
            id: '3',
            message: '스터디, 사이드 프로젝트 모집에 편리함을 제공해줍니다.',
            trigger : '4',
        },
        {
            id: '4',
            message: '또한 실시간으로 업데이트 되는 공모전을 살펴보실 수 있으시며, 자유롭게 질문과 답변을 하실 수 있습니다.',
        }
    ];

    const theme = {
        background: '#fff',
        headerBgColor: '#fff',
        headerFontColor: '#B1CBFF',
        headerFontSize: '15px',
        botBubbleColor: '#B1CBFF',
        botFontColor: '#fff',
        FontSize: '3px',
        userBubbleColor: '#fff',
        userFontColor: '#242424',

    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                {...config}
                placeholder="채팅 불가"
                floatingIcon={<img className="botImage" alt="chatbot" src={botImage} width='70' />}
                headerTitle="Cod_meter"
                botAvatar={botAvatar}
                userAvatar={userAvatar}
            />
        </ThemeProvider>
    );
}