```javascript
import { supabase } from "./supabase";

async function testConnection() {
  console.log("Testing Supabase connection...");

  const { data, error } = await supabase
    .from("crops")
    .select("id")
    .limit(1);

  if (error) {
    console.error("Supabase test failed:", error.message);
  } else {
    console.log("Supabase connected successfully!", data);
  }
}

testConnection();
```
