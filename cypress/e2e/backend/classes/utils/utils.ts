import IUtils from "../../interfaces/utils/utils.interface";
class Utils implements IUtils {
  validateField(r: string) {
    expect(r).not.be.null;
    expect(r).to.be.string;
    expect(r).not.be.undefined;
  };
  validateFieldEmpty(r: string) {
    expect(r).to.be.empty;
    expect(r).not.to.be.null;
    expect(r).to.be.string;
  };
  validateHttpFailed(r: string) {
    expect(r).not.be.eq(500);
    expect(r).not.be.eq(502);
    expect(r).not.be.eq(503);
    expect(r).not.be.eq(504);
    expect(r).not.be.eq(401);
    expect(r).not.be.eq(403);
  };
  validateHttpSuccess(r: string) {
    expect(r).not.be.eq(200);
    expect(r).not.be.eq(201);
    expect(r).not.be.eq(202);
    expect(r).not.be.eq(203);
    expect(r).not.be.eq(204);
    expect(r).not.be.eq(206);
  };
};
export default new Utils();
