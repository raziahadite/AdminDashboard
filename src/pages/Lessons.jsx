import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { LessonsData } from '../data/dummy';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Lessons = () => {

  const { currentColor } = useStateContext();

  async function addLesson() {
    console.warn(<LessonsData />)
    const formData = FormData();
    formData.append(<LessonsData />);
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Lessons" />
      <RichTextEditorComponent>
        <LessonsData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
      <br />

      <div>
        <Button onClick={addLesson} color="white" bgColor={currentColor} text="Add Lesson" borderRadius="10px" />
      </div>
    </div>
  )

  
};
export default Lessons;