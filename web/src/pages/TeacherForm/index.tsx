import React from 'react';

import PageHeader from '../../Components/PageHeader';

import './styles.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />
    </div>
  );
};

export default TeacherForm;
