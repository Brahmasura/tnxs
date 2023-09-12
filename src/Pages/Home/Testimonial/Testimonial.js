import React, { useState } from "react";
import style from "./testimonial.module.scss";
import studentOne from "../../../Assets/Testimonial/studentOne.jpg";
import studentTwo from "../../../Assets/Testimonial/studentTwo.jpg";
import studentThree from "../../../Assets/Testimonial/studentThree.jpg";
import studentFour from "../../../Assets/Testimonial/studentFour.jpg";
import modalClosePic from "../../../Assets/Testimonial/modalClosePic.svg";

const testiList = [
  {
    stuPic: studentOne,
    stuName: "Rajesh Johal",
    stuUni: "Belgorod State University, Russia",
    stuQoute: '"Interact with different Students of different Nationalities."',
    stuModalTitle: "Rajesh Johal, Jammu INDIA",
    stuExperience: "I am really happy to Study General Medicine in Medical university in Russia. I am really Satisfied to have chosen Belgorod state University University. I don’t just get to learn about medicine but also it is great experiance to open up & interact with different Students of different Nationalities. It is really a wonderful experience!",
  },

  {
    stuPic: studentTwo,
    stuName: "Vaishali Singh",
    stuUni: "Belgorod State University, Russia",
    stuQoute: '"Studying Medicine Abroad was never so easy"',
    stuModalTitle: "Vaishali singh , Allahabad INDIA",
    stuExperience:"Hello Friends my name is Vaishali Singh and i am from Allahbad , INDIA. I Always wanted to become Doctor and help people with their health and cure them. Becoming Doctor in India can be tough because we have compitition and also study costs are whooping high. One of my friend's Elder brother Studied abroad so i made up my mind to study Abroad too and Russia was delightful choice. Russia is also good choice because of affordable medical education and compared to other European countires Currency rates are Pretty attractive. When i met reprentatives from GRADUATION ABROAD i did not knew about procedure for Applying admission in foreign country. But i was well assisted by team and within a week of applying for registration and admission my Student Visa was ready. I was also helped for registration at MCI and getting my documents attested. The Team GRADUATION ABROAD is very very understanding and caring. I would suggest GRADUATION ABROAD to all my upcoming fellow students. I am sure you all will be satisfied with services and Team GRADABROAD won't let you down.",
  },

  {
    stuPic: studentThree,
    stuName: "Naveen Nath",
    stuUni: "KSMU, Karagandha",
    stuQoute: '"I recommend Graduation Abroad to Medicine aspiring students"',
    stuModalTitle: "Naveen Nath , Uttarakhand INDIA",
    stuExperience:"Its Really better to Study Abroad in Russia, Ukraine or Kazakhstan. Bieng Affordable it also provides better exposure and Interaction with People from many nationalities. My Father is Doctor himself and since childhood we saw dedication in him for his job and care for his patients. Maybe This is something we also learnt from him and i decided to be doctor after i realised somwhere inside me i also like to help people and cure their problems. In India i went through many medical enterance tests but it didn't worked out. At last i met representatives from GRADUATION ABROAD and i am still thankful to them that they took my Problem very seriously. I didn't had passport, nor i knew about any procedure to apply for foreign medcial collage. I was assisted very warmly by team and my all documentation and procedure was guided by team very precisly. They took care of every single procedure and i was informed about every step. Now i am in 4rth year and i can't wait to realise that my dream of bieng doctor came true. Team Graduation Abroad is creditable for making this come true. I thank them wholely.",
  },

  {
    stuPic: studentFour,
    stuName: "Airry Kanyapak",
    stuUni: "First Moscow State University",
    stuQoute:'"I will recomend Russia as destination for studying Medicine abroad"',
    stuModalTitle: "Airry Kanyapak, Thailand",
    stuExperience: "Russian medical degree is globally recognized and listed by international bodies which include World Health Organization, European Union, The International Medical Education Directory, ECFMG, USA, General Medical Council, UK etc. Studying and living here is comfortable as hostels in Russia are simple and comfortable, and universities offer the best combination of theoretical and practical knowledge to the students. I will recomend Russia as destination for studying Medicine abroad to anyone who does not wants to travel US, UK or Australia.",
  },
];

const Testimonial = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleReadMore = (value) => {
    setSelectedStudent(value);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <>
      <div className={style.testiContainer}>
        <h1 className={style.testiTitle}>Testimonial</h1>
        <div className={`container-fluid ${style.colsContainer}`}>
          <div className={`row ${style.rowTesti}`}>
            {testiList.map((student, index) => (
              <div
                className={`col-md-3 col-lg-3 ${style.studentCard}`}
                key={index}
              >
                <img src={student.stuPic} alt="student" />
                <p className={style.namePara}>{student.stuName}</p>
                <p className={style.uniPara}>{student.stuUni}</p>
                <hr />
                <p className={style.cardQoute}>{student.stuQoute}</p>
                <p
                  className={style.cardQoute}
                  onClick={() => handleReadMore(student)}
                >
                  ...Read more
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <p className={style.modalTitlePara}>
              {selectedStudent.stuModalTitle}
            </p>
            <hr />
            <p className={style.modalQoute}>{selectedStudent.stuQoute}</p>
            <p className={style.modalExpePara}>
              {selectedStudent.stuExperience}
            </p>
            <p className={style.modalBottomPara}>{selectedStudent.stuName}</p>
            <p className={style.modalBottomPara}>{selectedStudent.stuUni}</p>
           
            <img src={modalClosePic} alt="modalClose" className={style.closeButton} onClick={closeModal}/>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
