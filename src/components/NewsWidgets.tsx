import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function NewsWidgets() {
  return (
    <div className="hidden xl:inline space-y-2">
      <div className="bg-white py-2.5 rounded-lg space-y-2 w-80 overflow-hidden border border-gray-300">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="h-5 w-5 text-black/60"
          />
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
            <FontAwesomeIcon icon={faCircleDot} className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Mobiles made in India see surge
              </h5>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
            <FontAwesomeIcon icon={faCircleDot} className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Shopify laying off 10% of workforce
              </h5>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
            <FontAwesomeIcon icon={faCircleDot} className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Attrition in IT to slow down?
              </h5>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
            <FontAwesomeIcon icon={faCircleDot} className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Meet the highest-paid IT CEOs
              </h5>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 px-2.5 py-1">
            <FontAwesomeIcon icon={faCircleDot} className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Apexon plans to hire 1,000
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsWidgets;
