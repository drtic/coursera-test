<ul>
  <li ng-repeat="item in found">
    {{item.short_name}}, {{item.description}}
    <button class="btn btn-default" ng-click="onRemove($index)">Don't want this one!</button>
  </li>
<ul>
  <div class="error" ng-if="!found.length">Nothing Found</div>
