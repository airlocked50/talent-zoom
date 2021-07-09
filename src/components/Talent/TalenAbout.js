import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import GridItem from '../material-ui-component/Grid/GridItem';
import moment from 'moment';
import './talent.css';
function TalentAbout({ user }) {
  return (
    <Box h={'auto'}>
      <Flex flexDirection="column" justify="center" align="center" mt={5}>
        <GridItem mt={5} ml={10}>
          <div className="name">
            {user.name} {user.surname}
          </div>
          <Text fontSize="md">{user.livingCity}</Text>
          <GridItem>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '15px',
                marginBottom: '15px',
              }}>
              {user.githubUrl === '' ||
              user.githubUrl === null ||
              user.githubUrl === undefined ? (
                <a target="_blank" href={user.githubUrl} rel="noreferrer">
                  <img
                    src="/images/github.png"
                    style={{ width: 30, height: 30 }}
                    alt="Git Hub"
                  />
                </a>
              ) : (
                <a target="_blank" href={user.githubUrl} rel="noreferrer">
                  <img
                    src="/images/github.png"
                    className="social-link"
                    alt="Git Hub"
                  />
                </a>
              )}

              {user.linkedInUrl === '' ||
              user.linkedInUrl === null ||
              user.linkedInUrl === undefined ? (
                <a target="_blank" href={user.linkedInUrl} rel="noreferrer">
                  <img
                    src="/images/linkedin.png"
                    style={{ width: 30, height: 30 }}
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              ) : (
                <a target="_blank" href={user.linkedInUrl} rel="noreferrer">
                  <img
                    src="/images/linkedin.png"
                    className="social-link"
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              )}

              {user.xingUrl === '' ||
              user.xingUrl === null ||
              user.xingUrl === undefined ? (
                <a target="_blank" href={user.xingUrl} rel="noreferrer">
                  <img
                    src="/images/xing.png"
                    style={{ width: 30, height: 30 }}
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              ) : (
                <a target="_blank" href={user.xingUrl} rel="noreferrer">
                  <img
                    src="/images/xing.png"
                    className="social-link"
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              )}

              {user.sofUrl === '' ||
              user.sofUrl === null ||
              user.sofUrl === undefined ? (
                <a target="_blank" href={user.sofUrl} rel="noreferrer">
                  <img
                    src="/images/sof.png"
                    style={{ width: 25, height: 25 }}
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              ) : (
                <a target="_blank" href={user.sofUrl} rel="noreferrer">
                  <img
                    src="/images/sof.png"
                    className="social-link"
                    layout="fixed"
                    alt="Git Hub"
                  />
                </a>
              )}
            </div>
          </GridItem>
          <GridItem>
            <a href={user.cvUrl} className="cv" rel="cv">
              Click to see the resume
            </a>
          </GridItem>
          <hr className="line" />
        </GridItem>
        {/* <Box mt={3} className="sub-title-about">
          Professional experience
        </Box>
        <Box className="sub-body-about">{user.experienceYear === 10 ? "10+ years" : user.experienceYear + " " + "years"}</Box> */}
        <Box className="sub-title-about">Desired Position</Box>
        <Box>
          {(user.wantedRoles || []).map((role, index) => {
            return (
              <div key={index} className={'main-item-div'}>
                <Box className="category-talent-sub-title">
                  {' '}
                  {role.key} - {role.years === 0 ? '<1' : role.years}{' '}
                  {role.years === 1 ? 'Year' : 'Years'}{' '}
                </Box>
              </div>
            );
          })}
        </Box>
        <Box mt={3} className="sub-title-about">
          Position type
        </Box>
        {(user.wantedJobTimes || []).map((contract, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {contract.key}
            </Box>
          );
        })}

        <Box mt={3} className="sub-title-about">
          Desired location
        </Box>
        {(user.wantedWorkCity || []).map((city, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {city.key}
            </Box>
          );
        })}

        <Box mt={3} className="sub-title-about">
          Compensation expectations
        </Box>
        <Box className="sub-body-about">${user.wantedSalary}</Box>

        <Box mt={3} className="sub-title-about">
          Eligible to work in the U.S.
        </Box>
        <Box className="sub-body-about">
          {user.usPermit === true ? 'Yes' : 'No'}
        </Box>

        <Box mt={3} className="sub-title-about">
          Sponsorship requirement
        </Box>
        <Box className="sub-body-about">
          {user.visaPermit === true ? 'Yes' : 'No'}
        </Box>

        <Box mt={3} className="sub-title-about">
          Earliest start date
        </Box>
        <Box className="sub-body-about">
          {/* {user.startTime.start &&
          user.startTime.start.length > 3
            ? moment(user.startTime.start).format("MM-DD-YYYY")
            : user.startTime.start} */}
          {user.startTime
            ? user.startTime.start
              ? user.startTime.start.length > 3
                ? moment(user.startTime.start).format('MM-DD-YYYY')
                : user.startTime.start
              : ''
            : ''}
        </Box>

        <Box mt={3} className="sub-title-about">
          Languages
        </Box>
        {(user.languages || []).map((language, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {language.language} ({language.level.key})
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default TalentAbout;
