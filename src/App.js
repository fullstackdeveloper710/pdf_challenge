import React, { Fragment } from 'react';
import { PDFViewer , PDFDownloadLink} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'

import { useState } from 'react';
import * as xlsx from 'xlsx'

import './App.css';


const App = () => {

  const [Json, setJson] = useState([]);

  const [json4Table, setJson4Table] = useState([]);

  const [date , setDate] = useState('');


  const readUploadFile = (e) => {
    console.log(e.target.files)
    e.preventDefault();
    if (e.target.files) {

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet ,  {defval:""});
       
        setJson(json);
        console.log(json)

      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  function Id_Greater_Then10(flag) {

    setDate(flag)


    const result = Json.filter(idLessThen10);

    function idLessThen10(Json) {
      return Json.__EMPTY > 10;
    }

    setJson4Table(result)

  }

  function Nationality_Dom(flag) {

    setDate(flag)
    const result = Json.filter(nationality_equal_dom);

    function nationality_equal_dom(Json) {
      return Json.__EMPTY_3 === 'DOM';
    }

    setJson4Table(result)

  }


  function fillter_By_Location(flag) {
    setDate(flag)

    const result = Json.filter((Json) => {
      return (Json.__EMPTY_4?.trim() === 'Dohren' || Json.__EMPTY_4 === 'Ansbach');
    });



    setJson4Table(result)

  }

  return (
    <Fragment>


      {json4Table.length > 0 &&

<>
        <PDFViewer showToolbar={false} width="1000" height="900" className="app" >
          <Invoice data={json4Table} flag={date} Head={Json}/>
        </PDFViewer>

<PDFDownloadLink document={<Invoice data={json4Table} flag={date} Head={Json} />} fileName="download.pdf">
Download
</PDFDownloadLink>

</>

      }

      <div className="App">
        <form>
          <label htmlFor="upload">Upload File</label>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
        </form>

      

        <button onClick={() => Id_Greater_Then10('ID')}>Fillter By ID</button>
        <button onClick={() => Nationality_Dom('DOM')}>Fillter By Nationality</button>

        <button onClick={() => fillter_By_Location('LOC')}> Filter By Location</button>
        <div>


        </div>
      </div>
    </Fragment>
  );

}

export default App;







