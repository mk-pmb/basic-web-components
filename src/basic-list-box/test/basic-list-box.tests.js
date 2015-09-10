suite('basic-list-box', function() {

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
    listBox = null;
  });

  test("new list box has empty items collection", function() {
    var listBox = document.createElement('basic-list-box');
    assert.equal(listBox.items.length, 0);
  });

  test("selectedItem initially null", function(done) {
    var listBox = createSampleListBox();
    container.appendChild(listBox);
    flush(function() {
      assert.isNull(listBox.selectedItem);
      assert.equal(listBox.selectedIndex, -1);
      done();
    });
  });

  test("setting selectingIndex also updates selectedItem", function(done) {
    var listBox = createSampleListBox();
    container.appendChild(listBox);
    flush(function() {
      listBox.selectedIndex = 2;
      assert.equal(listBox.selectedItem, listBox.children[2]);
      done();
    });
  });

  test("setting selectedItem also updates selectedIndex", function(done) {
    var listBox = createSampleListBox();
    container.appendChild(listBox);
    flush(function() {
      listBox.selectedItem = listBox.children[2];
      assert.equal(listBox.selectedIndex, 2);
      done();
    });
  });

  test("setting selectedItem also updates value", function(done) {
    var listBox = createSampleListBox();
    container.appendChild(listBox);
    flush(function() {
      assert.equal(listBox.value, '');
      listBox.selectedIndex = 2;
      assert.equal(listBox.value, 'Two');
      done();
    });
  });

  test("setting value updates selectedItem", function(done) {
    var listBox = createSampleListBox();
    container.appendChild(listBox);
    flush(function() {
      listBox.value = 'Two';
      assert.equal(listBox.selectedIndex, 2);
      done();
    });
  });

});

function createSampleListBox() {
  var listBox = document.createElement('basic-list-box');
  var texts = ['Zero', 'One', 'Two'];
  texts.forEach(function(text) {
    var div = document.createElement('div');
    div.textContent = text;
    listBox.appendChild(div);
  });
  return listBox;
}