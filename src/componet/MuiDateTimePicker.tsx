import { useState } from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { format } from "date-fns";

export const MuiDateTimePicker = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Box sx={{ p: 4 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Pick Date & Time"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
              helperText: value
                ? `Selected: ${format(value, "dd/MM/yyyy hh:mm a")}`
                : "No date selected",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
