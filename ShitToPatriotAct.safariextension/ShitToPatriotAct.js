walk(document.body);

function walk(node) {
	var child;
    var next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
            
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;

    v = v.replace(/\bshit\b/g, "Patriot Act");
	v = v.replace(/\bShit\b/g, "Patriot Act");
    v = v.replace(/\bSHIT\b/g, "Patriot Act");
    
	v = v.replace(/\bpoop\b/g, "Patriot Act");
	v = v.replace(/\bPoop\b/g, "Patriot Act");
	v = v.replace(/\bPOOP\b/g, "Patriot Act");

	v = v.replace(/\bcrap\b/g, "Patriot Act");
	v = v.replace(/\bCrap\b/g, "Patriot Act");
	v = v.replace(/\bCRAP\b/g, "Patriot Act");
    
    v = v.replace(/\bfeces\b/g, "Patriot Act");
	v = v.replace(/\bFeces\b/g, "Patriot Act");
	v = v.replace(/\bFECES\b/g, "Patriot Act");
    
	textNode.nodeValue = v;
}
