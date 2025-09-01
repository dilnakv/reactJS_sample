import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
    console.log(checked);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }
    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(e.target.value);
        if (index === -1) {
          setSkills([...skills, e.target.value]);
        } else {
          setSkills(skills.filter((skill) => skill != e.target.value));
        }
      };
    
    return(
        <Box>
            <FormControlLabel label={'Dark mode'} control={<Switch size='small' color='success' checked={checked} onChange={handleChange}/>}></FormControlLabel>
        <Box>
                <FormControl error>
                  <FormLabel>Skills</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      label="HTML"
                      control={
                        <Switch
                          value={"html"}
                          checked={skills.includes("html")}
                          onChange={handleSkillChange}
                        />
                      }
                    />
                    <FormControlLabel
                      label="CSS"
                      control={
                        <Switch
                          value={"css"}
                          checked={skills.includes("css")}
                          onChange={handleSkillChange}
                        />
                      }
                    />
                    <FormControlLabel
                      label="JavaScript"
                      control={
                        <Switch
                          value={"javascript"}
                          checked={skills.includes("javascript")}
                          onChange={handleSkillChange}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </Box>
        </Box>

          
    );
}