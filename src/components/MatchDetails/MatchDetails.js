import { Box } from '@chakra-ui/react';
import React from 'react';
import CompanyStep from './CompanyStep';
import TalentStep from './TalentStep';

function MatchDetails({ match }) {
  const [contents, setContents] = React.useState([]);
  const [offerLetter, setOffetLetter] = React.useState([]);
  const [companyLogo, setCompanyLogo] = React.useState('');

  React.useEffect(() => {
    const result = [];
    const offerLetters = [];
    setCompanyLogo(match.employer.companyLogoUrl);
    match.companyContents.map((content, index) => {
      result.push(content);
      result.push(match.talentContents[index]);
    });
    setOffetLetter(offerLetters);
    setContents(result);
  }, []);

  const renderContent = () => {
    return contents.map((content, index) => {
      if (index % 2 === 0) {
        return <CompanyStep companyName={match.employer.companyName} content={content} companyLogo={companyLogo} />;
      } else {
        return <TalentStep talent={match.talent} content={content} offerLetter={offerLetter} />;
      }
    });
  };

  return <Box w={'100%'}>{renderContent()}</Box>;
}

export default MatchDetails;
