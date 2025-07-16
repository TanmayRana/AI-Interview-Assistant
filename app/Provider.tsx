// "use client";

// import { supabase } from "../services/supabaseClient";
// import React, { useContext, useEffect, useState } from "react";
// import { UserDetailContext } from "../context/UserDetailContext";

// const Provider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     CreateNewUser();
//   }, []);

//   const CreateNewUser = () => {
//     supabase.auth.getUser().then(async ({ data: { user } }) => {
//       let { data: User, error } = await supabase
//         .from("User")
//         .select("*")
//         .eq("email", user?.email);

//       console.log(User);

//       if (User.length === 0) {
//         const { data, error } = await supabase
//           .from("User")
//           .insert([
//             {
//               name: user?.user_metadata?.name,
//               email: user?.email,
//               picture: user?.user_metadata?.picture,
//             },
//           ])
//           .select();
//         // console.log(data);
//         setUser(data[0]);
//         return;
//       }
//       setUser(User[0]);
//     });
//   };
//   return (
//     <UserDetailContext.Provider value={{ user, setUser }}>
//       <div>{children}</div>
//     </UserDetailContext.Provider>
//   );
// };

// export default Provider;

// export const useUser = () => {
//   const context = useContext(UserDetailContext);

//   return context;
// };

// "use client";

// import React, { useEffect, useState } from "react";
// import { supabase } from "../services/supabaseClient";
// import { UserDetailContext } from "../context/UserDetailContext";
// import { User } from "@/lib/type";
// // import type { User } from "./type";

// interface Props {
//   children: React.ReactNode;
// }

// const Provider: React.FC<Props> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     CreateNewUser();
//   }, []);

//   const CreateNewUser = async () => {
//     const {
//       data: { user: authUser },
//     } = await supabase.auth.getUser();

//     if (!authUser) return;

//     const { data: existingUsers, error } = await supabase
//       .from("User")
//       .select("*")
//       .eq("email", authUser.email);

//     if (error) {
//       console.error("Fetch user error:", error);
//       return;
//     }

//     if (existingUsers && existingUsers.length === 0) {
//       const { data: newUserData, error: insertError } = await supabase
//         .from("User")
//         .insert([
//           {
//             name: authUser.user_metadata?.name,
//             email: authUser.email,
//             picture: authUser.user_metadata?.picture,
//             credits: 10, // default value if needed
//           },
//         ])
//         .select();

//       if (insertError) {
//         console.error("Insert user error:", insertError);
//         return;
//       }

//       if (newUserData) setUser(newUserData[0]);
//     } else {
//       setUser(existingUsers[0]);
//     }
//   };

//   return (
//     <UserDetailContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserDetailContext.Provider>
//   );
// };

// export default Provider;

"use client";

import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { UserDetailContext } from "../context/UserDetailContext";
import { User } from "@/lib/type";

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) return;

    const { data: existingUsers, error } = await supabase
      .from("User")
      .select("*")
      .eq("email", authUser.email);

    if (error) {
      console.error("Fetch user error:", error);
      return;
    }

    if (existingUsers && existingUsers.length === 0) {
      const { data: newUserData, error: insertError } = await supabase
        .from("User")
        .insert([
          {
            name: authUser.user_metadata?.name,
            email: authUser.email,
            picture: authUser.user_metadata?.picture,
            credits: 5,
          },
        ])
        .select();

      if (insertError) {
        console.error("Insert user error:", insertError);
        return;
      }

      if (newUserData) setUser(newUserData[0]);
    } else {
      setUser(existingUsers[0]);
    }
  };

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUser = () => {
  const context = useContext(UserDetailContext);

  return context;
};
