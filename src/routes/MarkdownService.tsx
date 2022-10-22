import { useParams } from "react-router-dom";
import target from 'assets/test_target.png'
import { useState } from "react";

export default function MarkdownService() {
    let {mdType} = useParams();

    let termMatches = {
        "chest": "Грудь",
        "brain": "Мозг",
        "foot": "Ступня",
        "spine": "Позвоночник",
        "pelvis": "Ягодицы",
        "hand": "Рука",
    }

    const [formData, setFormData] = useState(
        {
            hasCancer: "",
            cancerType: "",
            description: "",    
        }
    )

    // Функция для перехвата события onChange для элементов формы
    // Сохраняет значения input-элементов в сторе formData
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }


    // Перехват onChange для textarea. Костыль, надо будет убрать
    function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {        
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    // Функция для отправки данных формы на бэк
    function sendMarkdown(e: React.SyntheticEvent): void {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="md-serve">
            <h1 className="md-serv_title">{termMatches[mdType as keyof typeof termMatches]}</h1>
            <div className="md-serv_container">
                <div className="md-serv_target">
                    <img src={target} alt="" className="md-serv_target_img" />
                </div>
                <form onSubmit={sendMarkdown} className="md-serv_markdown">
                    <div className="form_hasCancer">
                        <h3 className="hasCancer_title">Есть рак?</h3>
                        <div className="hasCancer_wrapper">
                            <label htmlFor="hasCancerTrue">
                                Да
                                <input type="radio" name="hasCancer" id="hasCancerTrue" onChange={handleChange} value="true"/>
                            </label>

                            <label htmlFor="hasCancerFalse">
                                Нет
                                <input type="radio" name="hasCancer" id="hasCancerFalse" onChange={handleChange} value="false"/>
                            </label>
                        </div>
                    </div>
                    <div className="form_cancerType">
                        <h3 className="cancerType_title">Какой</h3>
                        <textarea className="cancerType_teaxtarea" 
                            name="cancerType" 
                            placeholder="Название"
                            onChange={handleTextareaChange} 
                            id=""></textarea>
                    </div>
                    <div className="form_description">
                        <h3 className="description_title">Комментарий</h3>
                        <textarea 
                        className="description_textarea"
                        name="description" 
                        placeholder="Комментарий"
                        onChange={handleTextareaChange} 
                        id=""></textarea>
                    </div>
                    <div className="form_submit">
                        <input className="submit_btn" type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        </div>
    )
}