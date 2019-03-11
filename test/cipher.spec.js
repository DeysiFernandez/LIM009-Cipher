describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal( cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG")});

    it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      });  
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal( cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg")});

    it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      }); 
    it('debería retornar "3456789012" para "0123456789" con offset 33',()=>{
      assert.equal( cipher.encode(33,"0123456789"),"3456789012")});

    it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      });
    it('debería retornar "òã" para "Ññ" con offset 33',()=>{
      assert.equal( cipher.encode(33,"Ññ"),"òã")});

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
      });
    it('debería retornar ")*$%|" para "()#$|" con offset 15',()=>{
      assert.equal( cipher.encode(33,"()#$|"),")*$%|" )});

  });
  
  
  

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")});

    it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });
  
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
        assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz")});

    it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
        });
    
    it('debería retornar "0123456789" para "3456789012" con offset 33',()=>{
        assert.equal(cipher.decode("3456789012",33),"0123456789")});


    it('debería ser una función', () => {
          assert.equal(typeof cipher.decode, 'function');
          });
      
    it('debería retornar "Ññ" para "òã" con offset 33',()=>{
          assert.equal(cipher.decode("òã",33),"Ññ")});

    it('debería ser una función', () => {
          assert.equal(typeof cipher.decode, 'function');
            });
        
    it('debería retornar "(/)#$|" para ") *$%|" con offset 33',()=>{
          assert.equal(cipher.decode(") *$%|",33),"(/)#$|")});
  

});

});
