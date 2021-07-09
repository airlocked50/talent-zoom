import {
  Box,
  Button,
  Flex,
  Input,
  FormControl,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { addUserData } from '../../redux/actions/stepOneAction';
import { Chip } from '@material-ui/core';

function Step5() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const [study, setStudy] = useState({
    school: '',
    degree: '',
    startDate: '03/03/2020',
    endDate: '03/03/2020',
  });
  const [talentEducations, setTalentEducations] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTalentEducations([...talentEducations, study]);
  
  }
  const handleInputChange = e => {
    const { name, value } = e.target;
    setStudy({ ...study, [name]: value });
  };

  const deleteEducation = (talentEducation, index) => {
    
    const updatedTalentEducation = talentEducations.filter(
      (te, i) => i !== index
    );
    setTalentEducations(updatedTalentEducation);
    
  };

  const handleCurrent = e => {
    setIsVisible(!isVisible);
    if (e.target.checked) {
      setStudy({ ...study, endDate: 'Still studying' });
    } else {
      setStudy({ ...study, endDate: '03/03/2021' });
    }
  };

  const goNextPage = () => {
    let updatedData = {
      educations: talentEducations,
    };
    dispatch(addUserData(updatedData));
    history.push('/talentSkills');
  };

  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Tell us about your education!
      </Text>
      <hr />

      <Text ml={5} fontWeight="bold" mt={10} fontSize="md">
        Add your education details
      </Text>

      <Flex direction="row">
        <form onSubmit={handleSubmit}>
          <FormControl id="school" mt={4}>
            <Input
              ml={5}
              w={[250, 320, 500, 500]}
              name="school"
              type="text"
              placeholder="University / School"
              value={study.school}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="degree" mt={4}>
            <Input
              ml={5}
              w={[250, 320, 500, 500]}
              name="degree"
              type="text"
              placeholder="Degree, field of study"
              value={study.degree}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl ml={5} id="password" mt={5}>
            <Box w={[200, 300, 400, 600]} d={{ md: 'flex' }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={study.startDate}
                    onChange={date => setStudy({ ...study, startDate: date })}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Box>

                <Box ml={[0, 0, 5, 5]}>
                  {isVisible === false ? (
                    <KeyboardDatePicker
                      disableToolbar
                      disabled={isVisible}
                      value={study.endDate}
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      onChange={date => setStudy({ ...study, endDate: date })}
                      id="date-picker-inline"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              </MuiPickersUtilsProvider>

              <Checkbox
                onChange={handleCurrent}
                border="#555555"
                mt={5}
                ml={[0, 5, 10, 10]}>
                Currently Study Here
              </Checkbox>
            </Box>
          </FormControl>

          <Button
            w={[250, 320, 500, 500]}
            ml={5}
            type="submit"
            width="full"
            mt={4}>
            Save
          </Button>
        </form>
      </Flex>
      <Box
        h={'auto'}
        w={[300, 500, 700, 900]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        p={2}>
        {talentEducations.length < 1 ? (
          <Text mt={5} ml={5}>
            *Add education
          </Text>
        ) : (
          (talentEducations || []).map((talentEducation, index) => (
            <Chip
              key={index}
              style={{ marginLeft: '10px', marginTop: '5px' }}
              label={talentEducation.school + '-' + talentEducation.degree}
              onDelete={() => deleteEducation(talentEducation, index)}
            />
          ))
        )}
      </Box>

      <Button
        bg="#7DB0E4"
        color="white"
        _hover="none"
        onClick={goNextPage}
        ml={5}
        mt={5}>
        Click And Save
      </Button>
    </>
  );
}

export default Step5;
