class CustomError extends Error {
  code: string;

  constructor(code: string, message?: string) {
    super(message);
    this.code = code;
  }
}

class CustomErrorService {
  throwError(code: string, message?: string): never {
    throw new CustomError(code, message);
  }
}

export default new CustomErrorService();
