import React, { useState } from 'react';


const ModulePage = () => {
  const [activeTab, setActiveTab] = useState('topics');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="module-page">
      <div className="left-vertical-bar">
        <div className={`tab ${activeTab === 'topics' ? 'active' : ''}`} onClick={() => handleTabClick('topics')}>
        <i class="fas fa-book topicIcon"></i>

        </div>
        <div className={`tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => handleTabClick('quiz')}>
          <i className="fas fa-question QuizIcon"></i>
        </div>
        <div className={`tab ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => handleTabClick('assignments')}>
          <i className="fas fa-tasks AssignmentsIcon"></i>
        </div>
      </div>
      <div className="right-side-content">
        {activeTab === 'topics' && (
          <div className="topic-content">
            <h2>Module Topics</h2>
            <ul>
              <li>Topic 1</li>
              <li>Topic 2</li>
              <li>Topic 3</li>
            </ul>
          </div>
        )}
        {activeTab === 'quiz' && (
          <div className="quiz-content ModuleQuiz">
            <h2>Module Quiz</h2>
            <p>Questions go here</p>
          </div>
        )}
        {activeTab === 'assignments' && (
          <div className="assignment-content ModuleDiv">
            <h2>Module Assignments</h2>
            <ul>
              <li>Assignment 1</li>
              <li>Assignment 2</li>
              <li>Assignment 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
