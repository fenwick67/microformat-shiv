/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.18 
Mocha integration test from: microformats-v2/rel=alternate/alternate
The test was built on Mon Jun 22 2015 14:02:25 GMT+0100 (BST)
*/

assert = chai.assert;


describe('rel=alternate', function() {
   var htmlFragment = "<base href=\"http://example.com\">\n<link rel=\"updates alternate\" type=\"application/atom+xml\" href=\"updates.atom\" />";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[],"rels":{"alternate":["http://example.com/updates.atom"],"updates":["http://example.com/updates.atom"]},"rel-urls":{"http://example.com/updates.atom":{"type":"application/atom+xml","rels":["updates","alternate"]}},"alternates":[{"type":"application/atom+xml","url":"http://example.com/updates.atom","rel":"updates"}]};

   it('alternate', function(){
       assert.deepEqual(found, expected);
   });
});