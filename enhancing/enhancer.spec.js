const { success, fail, repair, get} = require('./enhancer.js');
// test away!
let item = { name: "Bee", enhancement: 0, durability: 20 };
		
		describe("enhancer.js", () => {
		  describe("repair", () => {
		    it("", () => {
		      let repaired = { name: "Bee", enhancement: 0, durability: 100 };
		      expect(repair(item)).toEqual(repaired);
		    });
		  });
		
		  describe("success", () => {
		    it("should increment enhancement by 1 if less than 20", () => {
		      let en = { name: "Bee", enhancement: 1, durability: 100 };
		      expect(success(item)).toEqual(en);
		    });
		  });
		
		  describe("fail", () => {
		    let item1 = { name: "Bee", enhancement: 16, durability: 25 };
		    let item2 = { name: "Bee", enhancement: 17, durability: 35 };
		    let fail1 = { name: "Bee", enhancement: 1, durability: 95 };
		    let fail2 = { name: "Bee", enhancement: 16, durability: 10 };
		    let fail3 = { name: "Bee", enhancement: 16, durability: 10 };
		    it("should restore durablity to 100", () => {
		      expect(fail(item)).toEqual(fail1);
		    });
		    it("", () => {
		      expect(fail(item1)).toEqual(fail2);
		    });
		    it("", () => {
		      expect(fail(item2)).toEqual(fail3);
		    });
		  });
		});
