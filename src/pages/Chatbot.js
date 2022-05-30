import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
    const steps =[
        {
            id: '0',
            message: '안녕하세요 Cod_meter 챗봇입니다. 소개를 시작해 볼까요?',
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
            message: 'Cod_meter는 개발자들의 공간으로 스터디, 사이드 프로젝트 모집에 편리함을 제공합니다. 또한 실시간으로 업데이트 되는 공모전 또한 살펴보실 수 있으시며, 자유롭게 질문과 답변을 하실 수 있습니다.',
        },
    ];

    const theme = {
        background: '#DAE6FF',
        headerBgColor: '#B1CBFF',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#B1CBFF',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#242424',
    };

    return(
        <>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Cod_meter"
                    steps={steps}
                    placeholder={'채팅 불가'}
                />
            </ThemeProvider>
        </>
    );
};

export default Chatbot;