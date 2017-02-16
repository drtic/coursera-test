<ul>
  <li ng-repeat="item in foundItems">
    {{item.name}} {{item.description}}
    <button class="btn btn-default" ng-click="onRemove($index)">Remove</button>
  </li>
<ul>
