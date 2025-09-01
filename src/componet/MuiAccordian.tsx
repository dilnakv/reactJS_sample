import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          Accordian 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            tempore, doloremque cum temporibus cumque, incidunt distinctio id
            blanditiis optio harum quaerat non! Qui aliquid omnis quaerat?
            Reprehenderit quas nobis iste!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          Accordian 2
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            tempore, doloremque cum temporibus cumque, incidunt distinctio id
            blanditiis optio harum quaerat non! Qui aliquid omnis quaerat?
            Reprehenderit quas nobis iste!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded ===  'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          Accordian 3
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            tempore, doloremque cum temporibus cumque, incidunt distinctio id
            blanditiis optio harum quaerat non! Qui aliquid omnis quaerat?
            Reprehenderit quas nobis iste!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
