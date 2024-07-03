// EditorComponent.jsx

import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react'; // Importing the Editor component from tinymce-react


const EditorComponent = ({ initialValue, onChange }) => {
    const [editorContent, setEditorContent] = useState(initialValue);

    const handleEditorChange = (content, editor) => {
    setEditorContent(content);
    onChange(content);
    };
  return (
    <Editor
    initialValue={initialValue}
    apiKey={`${import.meta.env.VITE_REACT_APP_TINY_API_KEY}`} // Replace with your TinyMCE API key if necessary
    init={{
        directionality: "ltr",
        height: 500,
        menubar: true,
        plugins: [
            'code', // Include 'code' for code view button
            'help', // Include 'help' for help plugin
          ],
        toolbar:
        'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | code | help',
      content_style:
        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        setup: (editor) => {
                editor.ui.registry.addButton('code', {
              tooltip: 'View HTML Source', // Tooltip text for code view button
              icon: 'sourcecode', // Optionally, you can add an icon for the button
              onAction: () => {
                editor.execCommand('mceCodeEditor');
              },
            });
  
            editor.on('change', () => {
              const content = editor.getContent();
              handleEditorChange(content);
            });
          },
    }}
    
  />
  );
};

export default EditorComponent;
