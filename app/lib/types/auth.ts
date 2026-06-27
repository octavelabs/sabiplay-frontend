export type LoginRequest = {
  email: string;
  password: string;
};


export type SignupRequest = {
  email: string;
  password: string;
  username: string;
  full_name: string;
  dob?: string;
  is_student: boolean;
  university: string;
  department: string;
  state: string;
  avatar?: number;
};

export type InviteRequest = {
  token: string;
  username: string;
  password: string;
};
export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  email: string;
  otp: string
  password: string
}

export type VerifyOTPRequest = {
  email: string;
  otp: string
}


type UserData = {
  id: string
      email: string
      verified: boolean
      username: string
      full_name: string
      role: string
}

export type LoginResponse = {
  token: string;
  user: UserData
};

export type SignupResponse = {
  message: string;
};